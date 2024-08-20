<?php

namespace App\Utils;

trait CanBeRated
{
    public function qualifiers( $model = null)
    {
        $modelClass = $model ? $model : $this->getMorphClass();

        $morphToMany = $this->morphToMany(
            $modelClass,
            'qualifier',
            'ratings',
            'qualifier_id',
            'rateable_id'
        );

        return $morphToMany;
    }

    public function averageRating( $model = null)
    {
        return $this->qualifiers($model)->avg('score') ?: 0.0;
    }
}
