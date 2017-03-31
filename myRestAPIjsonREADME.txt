curl -X PUT -d '{ "first": "sammy", "last": "davis", "email":"my@email.com" }' \
  'https://bgupop.firebaseio.com/users/24.json'



curl -X PUT -d '{ "myid":99, "details":"fun thing", "time":"8 am" }' \
  'https://bgupop.firebaseio.com/tests/99.json'



curl 'https://bgupop.firebaseio.com/tests.json?print=pretty'




curl 'https://bgupop.firebaseio.com/users.json?print=pretty'
