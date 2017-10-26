insert into address(id, city, street, image) 
values(40002, 'Tel Aviv-Yafo','Yigal Alon 98 Elco center', 'https://goo.gl/vDAgi7');

insert into press(id) 
values(90001);

insert into about(id, title, employees_num, founded, funding) 
values(80001, 'Lorem ipsum dolor, sit amet consectetu', 45, 2010, '5M$ in 7 rounds');

insert into product(id, title, sentance1, sentance2) 
values(60002, 'killer title Lorem ipsum dolor, sit amet consectetu', 'killer first sentance Lorem ipsum dolor, sit amet consectetu', 'Second Sentance Lorem ipsum dolor, sit amet consectetu');

insert into company(id, name, logo, main_image, address_id, about_id, press_id) 
values(20001,'Google', 'https://goo.gl/re5wjf', 'https://goo.gl/R9xakP', 40002, 80001, 90001);

insert into link(id, name, link, company_id) 
values(10001,'twitter', 'www.twitter.com', 20001);
insert into link(id, name, link, company_id) 
values(10002,'instagram', 'www.instagram.com', 20001);

insert into image(id, url, company_id) 
values(30001, 'https://goo.gl/XRHURD', 20001);
insert into image(id, url, company_id) 
values(30002, 'https://goo.gl/DwY61N', 20001);
insert into image(id, url, product_id) 
values(30003, 'https://goo.gl/DwY61N', 60002);
insert into image(id, url, title, link, press_id) 
values(30004, 'https://goo.gl/5kbkSw', 'sub zero', 'some link', 90001);
insert into image(id, url, title, link, press_id) 
values(30005, 'https://goo.gl/mzzAtA', 'scorpion', 'some link', 90001);
insert into image(id, url, title, link, press_id) 
values(30006, 'https://goo.gl/gjBP1v', 'reptile', 'some link', 90001);
insert into image(id, url, title, link, press_id) 
values(30007, 'https://goo.gl/hn2JM8', 'raiden', 'some link', 90001);

insert into position(id, name, note, company_id, product_id) 
values(50002, 'Senior Software Engineer', 'We can relocate you to our Berlin office but with your current job position. There will be an option for you to get promoted after a short while.!', 20001, 60002);

insert into standard(id, name, met, position_id)
values(70001,'Preferred Salary', true, 50002);
insert into standard(id, name, met, position_id)
values(70002,'Relocation', true, 50002);
insert into standard(id, name, met, position_id)
values(70003,'Company Speciality', false, 50002);


insert into description(id, name, company_id) 
values(11001,'Build cool stuff Lorem ipsum dolor, sit amet consectetu', 20001);
insert into description(id, name, company_id) 
values(11002,'Understand repeatable automated processes Lorem ipsum dolor, sit amet consectetu', 20001);

insert into requirement(id, name, company_id) 
values(22001,'Must - deep knowledge of Python Lorem ipsum dolor, sit amet consectetu', 20001);
insert into requirement(id, name, company_id) 
values(22002,'Advantage - experience with Celery Lorem ipsum dolor, sit amet consectetu', 20001);

insert into stack(id, name, company_id) 
values(33001,'Server side: Java', 20001);
insert into stack(id, name, company_id) 
values(33002,'Front end: React', 20001);

insert into benefit(id, name, company_id) 
values(44001,'Ability to work independently Lorem ipsum dolor, sit amet consectetu', 20001);
insert into benefit(id, name, company_id) 
values(44002,'Portfolio of code you have Lorem ipsum dolor, sit amet consectetu', 20001);


