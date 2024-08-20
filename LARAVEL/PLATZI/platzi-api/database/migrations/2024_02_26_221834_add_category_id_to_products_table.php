<?php

use App\Models\Categorie;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {

        $category = new Categorie;
        $category->name = 'Otros';
        $category->save();
        Schema::table('products', function (Blueprint $table) use ($category) {
            $table->unsignedBigInteger('category_id')->default($category->id);

            $table->foreign('category_id')->references('id')->on('categories');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('products', function (Blueprint $table)  {
            $table->dropColumn('category_id');
        });
    }
};
