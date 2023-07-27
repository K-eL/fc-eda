INSERT INTO clients (id, name, email) VALUES
  ('1', 'John Doe', 'john.doe@example.com'),
  ('2', 'Jane Smith', 'jane.smith@example.com');

INSERT INTO accounts (id, client_id, balance) VALUES
  ('1', '1', 1000),
  ('2', '2', 500);

INSERT INTO transactions (id, account_id_from, account_id_to, amount) VALUES
  ('1', '1', '2', 500),
  ('2', '2', '1', 250);