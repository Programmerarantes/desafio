import {Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/pg';


interface UserInstance extends Model {
    id: number,
    nome: string,
    cpf: string,
    rg: string, 
    dataNascimento: Date,
    sexo: string
}

export const Pessoas = sequelize.define<UserInstance>("Pessoas", {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    nome: {
        type: DataTypes.STRING
    },
    cpf: {
        type: DataTypes.NUMBER,
        allowNull: false,
        validate: {
            is: /^[0-9]{11}$/,
            notEmpty: true
        },
        set(value: string) {
            this.setDataValue('cpf', value.replace(/\D/g, ''))
        }
    },
    rg: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            is: /^[0-9]{9}$/,
            notEmpty: true
        },
        set(value: string) {
            // Limpa caracteres não numéricos antes de salvar no banco de dados
            this.setDataValue('rg', value.replace(/\D/g, ''));
        }
    },
    dataNascimento: {
        type: DataTypes.DATE,
        allowNull: false
    },
    sexo: {
        type: DataTypes.STRING,
        allowNull: false,
        }
    },
    {
    tableName: 'pessoas',
    timestamps: false
});