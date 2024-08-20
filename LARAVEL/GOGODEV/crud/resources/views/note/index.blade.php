@extends('layouts.app')

@section('content')
    <a href="{{ route('note.create') }}">Create new Note</a>
    <ul>
        @forelse ($notes as $note)
            <li>
                <a href="{{ route('note.show', $note->id) }}">{{ $note->title }}</a>
                <a href="{{ route('note.edit', $note) }}">| Editar | </a>

                <form action="{{ route('note.destroy', $note->id) }}" method="post">
                    @csrf
                    @method('DELETE')
                    <input type="submit" value="Delete">
                </form>
            </li>
        @empty
            <p>No Data</p>
        @endforelse
    </ul>
@endsection
