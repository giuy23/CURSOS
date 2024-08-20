<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        User::factory(3)->create();
        User::factory()->create([
            'name' => 'Luis Admin',
            'email' => 'luis@gmail.com',
            'email_verified_at' => now(),
            'password' => '123456789',
            'created_at' => now(),
            'updated_at' => now()
        ]);
        $this->call(CategorieSeeder::class);
        $this->call(ProductSeeder::class);
    }
}
