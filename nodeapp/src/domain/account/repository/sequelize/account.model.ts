import { Column, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table({
	tableName: "accounts",
	timestamps: false,
})
export class AccountModel extends Model {
	@PrimaryKey
	@Column({ allowNull: false })
	client_id: string;

	@Column({ allowNull: false })
	balance: number;
}
