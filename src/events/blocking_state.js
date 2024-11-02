export default function handle_blocking_state(event) {
  const { query, params, body, headers, ip, secure, ...rest } = event;
  const data = body;

  console.log('>>> Handling blocking state notification...');
  // console.log('with data : ', data); // use to debug (comment when done)
}
