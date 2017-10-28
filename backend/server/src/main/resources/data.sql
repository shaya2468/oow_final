insert into address(id, city, street, image) 
values(40002, 'Tel Aviv-Yafo','Yigal Alon 98 Elco center', 'https://goo.gl/vDAgi7');

insert into press(id) 
values(90001);

insert into about(id, title, employees_num, founded, funding) 
values(80001, 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur consectetur sequi, reiciendis ad, ea nostrum excepturi enim maiores voluptate minus eveniet numquam pariatur quisquam maxime corrupti tempore adipisci explicabo voluptatibus?', 45, 2010, '5M$ in 7 rounds');

insert into product(id, title, sentance1, sentance2) 
values(60002, 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur consectetur sequi, reiciendis ad, ea nostrum excepturi enim maiores voluptate minus eveniet numquam pariatur quisquam maxime corrupti tempore adipisci explicabo voluptatibus?', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur consectetur sequi, reiciendis ad, ea nostrum excepturi enim maiores voluptate minus eveniet numquam pariatur quisquam maxime corrupti tempore adipisci explicabo voluptatibus?', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur consectetur sequi, reiciendis ad, ea nostrum excepturi enim maiores voluptate minus eveniet numquam pariatur quisquam maxime corrupti tempore adipisci explicabo voluptatibus?');

insert into company(id, name, logo, main_image, address_id, about_id, press_id) 
values(20001,'Google', 'https://goo.gl/re5wjf', 'https://goo.gl/R9xakP', 40002, 80001, 90001);

insert into link(id, name, link, company_id) 
values(10001,'twitter', 'www.twitter.com', 20001);
insert into link(id, name, link, company_id) 
values(10002,'instagram', 'www.instagram.com', 20001);


insert into image(id, url, company_id) 
values(30001, 'https://goo.gl/nAVwXP', 20001);
insert into image(id, url, company_id) 
values(30002, 'https://goo.gl/vuyKmc', 20001);
insert into image(id, url, company_id) 
values(30003, 'https://goo.gl/7MP9B6', 20001);
insert into image(id, url, company_id) 
values(30004, 'https://goo.gl/bQ2k8X', 20001);
insert into image(id, url, company_id) 
values(30005, 'http://i.dailymail.co.uk/i/pix/2017/03/12/23/3E35CDA700000578-4307110-Images_of_the_spectacular_skies_were_crammed_onto_Instagram_as_o-a-2_1489361570500.jpg', 20001);
insert into image(id, url, product_id) 
values(30006, 'https://goo.gl/mzzAtA', 60002);
insert into image(id, url, title, link, press_id) 
values(30007, 'https://goo.gl/dtTUjr', 'Kung lao', 'some link', 90001);
insert into image(id, url, title, link, press_id) 
values(30008, 'https://goo.gl/yqJrVB', 'GORO', 'some link', 90001);
insert into image(id, url, title, link, press_id) 
values(30009, 'https://goo.gl/gjBP1v', 'reptile', 'some link', 90001);
insert into image(id, url, title, link, press_id) 
values(300010, 'https://goo.gl/suFVsk', 'JAX', 'some link', 90001);
insert into image(id, url, product_id) 
values(300011, 'https://goo.gl/5kbkSw', 60002);




insert into position(id, name, note, company_id, product_id) 
values(50002, 'Senior Software Engineer', 'We can relocate you to our Berlin office but with your current job position. There will be an option for you to get promoted after a short while.!', 20001, 60002);

insert into standard(id, name, met, position_id)
values(70001,'Million Dollar Bonus', true, 50002);
insert into standard(id, name, met, position_id)
values(70002,'Dog Friendly', true, 50002);

insert into standard(id, name, met, position_id)
values(70003,'Company Speciality', true, 50002);
insert into standard(id, name, met, position_id)
values(70004,'Specific company', true, 50002);

insert into standard(id, name, met, position_id)
values(70005,'Ice cream', false, 50002);
insert into standard(id, name, met, position_id)
values(70006,'Daily Massages', false, 50002);


insert into description(id, name, position_id) 
values(11001,'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur consectetur sequi, reiciendis ad, ea nostrum excepturi enim maiores voluptate minus eveniet numquam pariatur quisquam maxime corrupti tempore adipisci explicabo voluptatibus?', 50002);
insert into description(id, name, position_id) 
values(11002,'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur consectetur sequi, reiciendis ad, ea nostrum excepturi enim maiores voluptate minus eveniet numquam pariatur quisquam maxime corrupti tempore adipisci explicabo voluptatibus?', 50002);
insert into description(id, name, position_id) 
values(11003,'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur consectetur sequi, reiciendis ad, ea nostrum excepturi enim maiores voluptate minus eveniet numquam pariatur quisquam maxime corrupti tempore adipisci explicabo voluptatibus?', 50002);
insert into description(id, name, position_id) 
values(11004,'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur consectetur sequi, reiciendis ad, ea nostrum excepturi enim maiores voluptate minus eveniet numquam pariatur quisquam maxime corrupti tempore adipisci explicabo voluptatibus?', 50002);
insert into description(id, name, position_id) 
values(11005,'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur consectetur sequi, reiciendis ad, ea nostrum excepturi enim maiores voluptate minus eveniet numquam pariatur quisquam maxime corrupti tempore adipisci explicabo voluptatibus?', 50002);
insert into description(id, name, position_id) 
values(11006,'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur consectetur sequi, reiciendis ad, ea nostrum excepturi enim maiores voluptate minus eveniet numquam pariatur quisquam maxime corrupti tempore adipisci explicabo voluptatibus?', 50002);
insert into description(id, name, position_id) 
values(11007,'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur consectetur sequi, reiciendis ad, ea nostrum excepturi enim maiores voluptate minus eveniet numquam pariatur quisquam maxime corrupti tempore adipisci explicabo voluptatibus?', 50002);
insert into description(id, name, position_id) 
values(11008,'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur consectetur sequi, reiciendis ad, ea nostrum excepturi enim maiores voluptate minus eveniet numquam pariatur quisquam maxime corrupti tempore adipisci explicabo voluptatibus?', 50002);


insert into requirement(id, name, position_id) 
values(22001,'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur consectetur sequi, reiciendis ad, ea nostrum excepturi enim maiores voluptate minus eveniet numquam pariatur quisquam maxime corrupti tempore adipisci explicabo voluptatibus?', 50002);
insert into requirement(id, name, position_id) 
values(22002,'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur consectetur sequi, reiciendis ad, ea nostrum excepturi enim maiores voluptate minus eveniet numquam pariatur quisquam maxime corrupti tempore adipisci explicabo voluptatibus?', 50002);

insert into stack(id, name, position_id) 
values(33001,'Server side: Java', 50002);
insert into stack(id, name, position_id) 
values(33002,'Front end: React', 50002);

insert into benefit(id, name, position_id) 
values(44001,'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur consectetur sequi, reiciendis ad, ea nostrum excepturi enim maiores voluptate minus eveniet numquam pariatur quisquam maxime corrupti tempore adipisci explicabo voluptatibus?', 50002);
insert into benefit(id, name, position_id) 
values(44002,'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur consectetur sequi, reiciendis ad, ea nostrum excepturi enim maiores voluptate minus eveniet numquam pariatur quisquam maxime corrupti tempore adipisci explicabo voluptatibus?', 50002);


