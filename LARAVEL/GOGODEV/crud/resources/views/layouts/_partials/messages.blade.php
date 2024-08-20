@if ( $message = Session::get('success') )
  <div class="" style="padding: 15px; background-color: green; color: #fff">
    <p>{{ $message }}</p>
  </div>
@endif
