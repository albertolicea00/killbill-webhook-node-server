export default function handle_bundle_pause(event) {
  const { query, params, body, headers, ip, secure, ...rest } = event;
  const data = body;

  console.log('>>> Handling bundle pause notification...');
  // console.log('with data : ', data); // use to debug (comment when done)
}
