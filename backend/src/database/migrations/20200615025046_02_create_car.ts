import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('cars', (table) => {
    table.increments('id').notNullable();
    table.string('brand').notNullable();
    table.string('model').notNullable();
    table.decimal('year').notNullable();
    table.decimal('km').notNullable();
    table.decimal('value').notNullable();
    table.string('additional');

    table.string('user_id').notNullable();
    table.foreign('user_id').references('id').inTable('users');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('cars');
}
