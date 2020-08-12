import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('password').notNullable();
    table.string('name').notNullable();
    table.string('whatsapp').notNullable();
    table.string('email').notNullable().unique();
    table.string('uf', 2).notNullable();
    table.string('city').notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('users');
}
