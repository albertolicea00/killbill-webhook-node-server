export default function handle_broadcast_service(event) {
  const { query, params, body, headers, ip, secure, ...rest } = event;
  const data = body;

  console.log('>>> Handling broadcast service notification...');
  // console.log('with data : ', data); // use to debug (comment when done)
}
