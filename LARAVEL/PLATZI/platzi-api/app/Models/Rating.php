<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\Pivot;

class Rating extends Pivot
{
    public $incrementing = true;

    public function rateable()
    {
        return $this->morphTo();
    }

    public function qualifier()
    {
        return $this->morphTo();
    }

    use HasFactory;
}
