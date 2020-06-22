alert('bart')
var switchSource = new EventSource("{{ url_for('switch') }}");
switchSource.onmessage = function(event) {
    console.log(event.data)
  }