<?php

namespace App\Http\Controllers;

use App\Http\Requests\NoteRequest;
use App\Http\Resources\NoteResource;
use App\Models\Note;
use Illuminate\Http\JsonResponse;

class NoteController extends Controller
{
    public function index(): JsonResponse
    {
        // $notes = Note::all();
        $notes = NoteResource::collection(Note::all());
        return response()->json($notes, 200);
    }

    public function store(NoteRequest $request): JsonResponse
    {
        $note = Note::create($request->all());
        return response()->json(['success' => true, 'data' => new NoteResource($note) ], 201);
    }


    public function show(Note $note): JsonResponse
    {
        return response()->json(new NoteResource($note), 200);
    }

    public function update(NoteRequest $request, Note $note): JsonResponse
    {
        $note->update($request->all());
        return response()->json(['success' => true, 'data' => new NoteResource($note) ], 200);
    }

    public function destroy(Note $note): JsonResponse
    {
        $note->delete();
        return response()->json(['success' => true], 200);
    }
}
