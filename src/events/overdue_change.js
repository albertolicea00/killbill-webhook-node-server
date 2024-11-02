export default function handle_overdue_change(event) {
  const { query, params, body, headers, ip, secure, ...rest } = event;
  const data = body;

  console.log('>>> Handling overdue change notification...');
  // console.log('with data : ', data); // use to debug (comment when done)
}
