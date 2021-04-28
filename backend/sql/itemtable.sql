
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


-- insert test data
insert into tblcategory ("catName") values ('Laptop');

-- find seq name
select pg_get_serial_sequence('tblitems', 'itemId')

-- reset identity number : [tablename]_[seq column]_seq
ALTER SEQUENCE "tblitem_itemId_seq" RESTART WITH 1;