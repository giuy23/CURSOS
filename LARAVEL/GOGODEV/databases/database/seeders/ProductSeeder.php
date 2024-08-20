<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Product::create(([
        //     'name' => 'Agua',
        //     'short_description' => 'Lorem',
        //     'description' => 'Lorem ipsum dolor',
        //     'price' => 25
        // ]));
        // Product::create(([
        //     'name' => 'Agua 2',
        //     'short_description' => 'Lorem',
        //     'description' => 'Lorem ipsum dolor',
        //     'price' => 25
        // ]));
        // Product::create(([
        //     'name' => 'Agua 3',
        //     'short_description' => 'Lorem',
        //     'description' => 'Lorem ipsum dolor',
        //     'price' => 25
        // ]));
        Product::factory(15)->create();
    }
}
