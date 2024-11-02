export default function handle_account_change(event) {
  const { query, params, body, headers, ip, secure, ...rest } = event;
  const data = body;

  console.log('>>> Handling account change notification...');
  // console.log('with data : ', data); // use to debug (comment when done)
}
