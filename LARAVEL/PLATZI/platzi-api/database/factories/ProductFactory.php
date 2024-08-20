<?php

namespace Database\Factories;

use App\Models\Categorie;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'price' => fake()->numberBetween(10000, 60000),
            'category_id' => function () {
                return Categorie::query()->inRandomOrder()->first()->id;
            },
            'created_by' => function(){
                return User::query()->inRandomOrder()->first()->id;
            }

        ];
    }
}
