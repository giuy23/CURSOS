<?php

namespace Database\Seeders;

use App\Models\Phone;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PhoneSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = User::first();

        Phone::create([
            'prefix' => 51,
            'phone_number' => 987654321,
            'user_id' => $user->id,
        ]);

        Phone::create([
            'prefix' => 33,
            'phone_number' => 7654321,
            'user_id' => $user->id,
        ]);
    }
}
