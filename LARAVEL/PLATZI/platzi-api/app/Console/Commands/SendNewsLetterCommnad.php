<?php

namespace App\Console\Commands;

use App\Models\User;
use App\Notifications\NewsLetterNotification;
use Illuminate\Console\Command;
use \Illuminate\Console\OutputStyle;
class SendNewsLetterCommnad extends Command
{
    protected $signature = 'send:email {emails?*}';

    protected $description = 'Envía un correo electónico';

    public function handle()
    {
        $emails = $this->argument('emails');

        $builder = User::query();

        if ($emails) {
            $builder->whereIn('email', $emails);
        }

        $count = $builder->count();

        if ($count) {
            $this->output->progressStart($count);
            $builder->whereNotNull('email_verified_at')
            ->each(function (User $user){
                $user->notify(new NewsLetterNotification);
                $this->output->progressAdvance();
            });

            $this->output->progressFinish();
            return $this->info("Se enviaron {$count} correos");
        }

        return $this->info('No se envió ningún correo');
    }
}
