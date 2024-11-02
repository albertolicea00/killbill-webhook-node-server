export default function handle_tag_creation(event) {
  const { query, params, body, headers, ip, secure, ...rest } = event;
  const data = body;

  console.log('>>> Handling tag creation notification...');
  // console.log('with data : ', data); // use to debug (comment when done)
}
