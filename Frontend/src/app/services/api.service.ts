registerUser(user: any) {
  return this.http.post('http://localhost:5290/api/auth/register', user);
}
