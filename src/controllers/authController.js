import * as authService from '../services/auth.js';

export async function register(req, res) {
  try {
    const { name, email, password } = req.body;
    const newUser = await authService.registerUser(name, email, password);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;
    const token = await authService.loginUser(email, password);
    res.json({ token });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
}
