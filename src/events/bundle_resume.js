export default function handle_bundle_resume(event) {
  const { query, params, body, headers, ip, secure, ...rest } = event;
  const data = body;

  console.log('>>> Handling bundle resume notification...');
  // console.log('with data : ', data); // use to debug (comment when done)
}
