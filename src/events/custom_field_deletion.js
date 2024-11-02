export default function handle_custom_field_deletion(event) {
  const { query, params, body, headers, ip, secure, ...rest } = event;
  const data = body;

  console.log('>>> Handling custom field deletion notification...');
  // console.log('with data : ', data); // use to debug (comment when done)
}
