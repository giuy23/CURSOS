<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Resources\Json\ResourceCollection;

class ProductColection extends ResourceCollection
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public $collects = ProductResource::class;
    public function toArray(Request $request): array
    {
        return [
            'data' => $this->collection,
            'metadata' => 'metadata'
        ];
    }
}
