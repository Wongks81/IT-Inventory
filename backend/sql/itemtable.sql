
-- create tblitems SQL:
create table tblitems (
    "itemId" INT GENERATED ALWAYS AS IDENTITY primary key,
    "itemName" text,
    "itemSN" text,
    "vendorId" int,
    "catId" int,
    "createdDate" date,
    "createdBy" text,
    "updateDate" date,
    "updatedBy" text,
    "archiveFlag" boolean
    FOREIGN KEY ("catId") REFERENCES tblcategory("catId")
);

-- create tblcategory SQL:
create table tblcategory(
    "catId" INT GENERATED ALWAYS AS IDENTITY primary key,
    "catName" text,
);

-- create tblmaintenance SQL:
create table tblmaintenance(
    "mainId" int GENERATED ALWAYS AS identity primary key,
    "mainStartDate" date,
    "mainEndDate" date,
	FOREIGN KEY ("mainId") REFERENCES tblitems("itemId")
)

-- create tblvendor SQL:
create table tblvendor(
    "vendorId" int GENERATED ALWAYS AS identity primary key,
    "vendorCoyName" text,
    "vendorAMName" text,
    "vendorAMEmail" text,
    "vendorAMCoyPhone" text,
    "vendorAMMobile" text
)

-- create tblitems_vendor SQL (Many to Many relationship):
create table tblitems_vendor(
    "itemId" int REFERENCES tblitems("itemId") on Update CASCADE on Delete CASCADE,
    "vendorId" int REFERENCES tblvendor("vendorId") on Update CASCADE,
    "itemPrice" numeric(5,2),
    "itemQuantity" int default 1,
    Constraint items_vendor_pk primary key("itemId","vendorId")
)

-- insert test data
insert into tblcategory ("catName") values ('Laptop');

-- find seq name
select pg_get_serial_sequence('tblitems', 'itemId')

-- reset identity number : [tablename]_[seq column]_seq
ALTER SEQUENCE "tblitem_itemId_seq" RESTART WITH 1;