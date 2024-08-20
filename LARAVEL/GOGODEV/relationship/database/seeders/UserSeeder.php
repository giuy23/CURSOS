<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'user 1',
            'email' => 'user@gmail.com',
            'password' => Hash::make('123456789'),
        ]);
        User::create([
            'name' => 'user 2',
            'email' => 'user2@gmail.com',
            'password' => Hash::make('123456789'),
        ]);
        User::create([
            'name' => 'user 3',
            'email' => 'user3@gmail.com',
            'password' => Hash::make('123456789'),
        ]);
    }
}
