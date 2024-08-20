<?php

namespace App\Http\Controllers;


// use Illuminate\Http\Request;

use App\Console\Commands\SendEmailVerificationReminderCommand;
use Illuminate\Support\Facades\Artisan;

class NewsLetterController extends Controller
{
    public function send()
    {
        Artisan::call(SendEmailVerificationReminderCommand::class);

        return response()->json([
            'data' => 'ok'
        ]);
    }
}

