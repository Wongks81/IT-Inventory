
-- create table SQL:
create table tblItems (
    itemId integer,
    itemName text
);

-- insert test data
insert into tblItem (itemId,itemName) values (1,'Desktop');
insert into tblItem (itemId,itemName) values (2,'Laptop');

-- find seq name 
select pg_get_serial_sequence('tblitems', 'itemId')

-- reset identity number
ALTER SEQUENCE "tblitem_itemId_seq" RESTART WITH 1;