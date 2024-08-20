<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Role::create([
            'name' => 'admin',
        ]);
        Role::create([
            'name' => 'staff',
        ]);
        Role::create([
            'name' => 'user',
        ]);
        Role::create([
            'name' => 'guest',
        ]);

        DB::table('role_user')->insert([
            'role_id' => 1,
            'user_id' => 1,
            'added_by' => 'juanjo',
        ]);
        DB::table('role_user')->insert([
            'role_id' => 2,
            'user_id' => 1,
            'added_by' => 'luis',
        ]);
        DB::table('role_user')->insert([
            'role_id' => 3,
            'user_id' => 1,
            'added_by' => 'jose maría',
        ]);
        DB::table('role_user')->insert([
            'role_id' => 4,
            'user_id' => 1,
            'added_by' => 'juanjo',
        ]);
        DB::table('role_user')->insert([
            'role_id' => 1,
            'user_id' => 2,
            'added_by' => 'maría',
        ]);
        DB::table('role_user')->insert([
            'role_id' => 2,
            'user_id' => 2,
            'added_by' => 'maría',
        ]);
        DB::table('role_user')->insert([
            'role_id' => 3,
            'user_id' => 2,
            'added_by' => 'luis',
        ]);
        DB::table('role_user')->insert([
            'role_id' => 4,
            'user_id' => 2,
            'added_by' => 'jusnjo',
        ]);
    }
}
