@extends('layouts.app')

@section('content')
    @if ($errors->any())
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    @endif

    <a href="{{ route('note.index') }}">Back</a>

    <form method="POST" action="{{ route('note.update', $note->id) }}">
        @csrf
        @method('PUT')

        <label for="title">Title: </label>
        <input type="text" id="title" name="title" value="{{ $note->title }}">
        @error('title')
            <p style="color: rgb(49, 99, 143);">{{ $message }}</p>
        @enderror

        <label for="description">Description: </label>
        <input type="text" id="description" name="description" value="{{ $note->description }}">
        @error('description')
            <p style="color: rgb(49, 99, 143);">{{ $message }}</p>
        @enderror

        <input type="submit" value="Update">
    </form>

@endsection
