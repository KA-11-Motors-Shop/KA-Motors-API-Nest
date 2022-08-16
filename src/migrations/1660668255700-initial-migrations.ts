import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigrations1660668255700 implements MigrationInterface {
    name = 'initialMigrations1660668255700'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "imagem" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "link" character varying NOT NULL, "anuncioId" uuid, CONSTRAINT "PK_7ee30edd85bb84d644b88ac624f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "anuncio" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "titulo" character varying NOT NULL, "preco" integer NOT NULL, "ano" integer NOT NULL, "categoria" character varying NOT NULL, "quilometragem" integer NOT NULL, "descricao" text NOT NULL, "tipo" character varying NOT NULL, "publicado" boolean NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_5541bfac946f277f59379e45014" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "imagem" ADD CONSTRAINT "FK_68a772805a86232d482c69049ce" FOREIGN KEY ("anuncioId") REFERENCES "anuncio"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "imagem" DROP CONSTRAINT "FK_68a772805a86232d482c69049ce"`);
        await queryRunner.query(`DROP TABLE "anuncio"`);
        await queryRunner.query(`DROP TABLE "imagem"`);
    }

}
