USE spicydb;   

INSERT INTO user (name, username, password, email,) VALUES 
('testuser1', 'testuser1', 'testuser1pass', 'test1@email.com'),
('testuser2', 'testuser2', 'testuser2pass', 'test2@email.com')

INSERT INTO user_spice_rack (name, owned_by_user, purchase_date, expiration_date, brand) VALUES
('Oregano', 'testuser1', '1/1/21', '2/5/23', 'Mcormick'),
('Salt', 'testuser1', '1/1/21', '2/5/23', 'Mcormick'),
('Pepper', 'testuser1', '1/1/21', '2/5/23', 'Mcormick'),
('Cumin', 'testuser1', '1/1/21', '2/5/23', 'Mcormick'),
('Rosemary', 'testuser1', '1/1/21', '2/5/23', 'Mcormick'),
('Parsely', 'testuser1', '1/1/21', '2/5/23', 'Mcormick'),
('Oregano', 'testuser2', '1/1/21', '2/5/23', 'Mcormick'),
('Salt', 'testuser2', '1/1/21', '2/5/23', 'Mcormick'),
('Fenugreek', 'testuser2', '1/1/21', '2/5/23', 'Mcormick'),
('Chili Powder', 'testuser2', '1/1/21', '2/5/23', 'Mcormick'),
('Saffron', 'testuser2', '1/1/21', '2/5/23', 'Mcormick');