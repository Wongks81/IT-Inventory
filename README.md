# ITinventory
Before 17/04/21
1. Get rows from postgres done
2. Lazy-Loading for item done
-----------------------------------------------------------------------------------------------------
17/04/21
1. To post to postgres db - done
2. Add documention in sql for resetting identity number.
3. Validation only done for required on itemName
-----------------------------------------------------------------------------------------------------
18/04/21
New
1. To edit item entries - done for itemName
    1.1 to add edit button to panel - added to item details instead.
    1.2 Added alert and navigation to direct back to item list page on submit
        ( Might be better if the success is displayed on the item list page : snackbar )

Fix
a. Added a "Back" button to add item to route back to list page
    a1. Set the buttons in item.css to 100px width
b. Changed the additem form from ngModel to ngSubmit with the form control to get the values.
    - ngModel with FormControl will be deprecated soon.
c. Changed validators for model from cItemCheck to fgItemName for better controls indication
d. Added get list of items to be ordered by itemId as item after editing will appear as last record.
-----------------------------------------------------------------------------------------------------
19.04.21
1. delete item done
2. itemroutes.js now contain the crud operations for item section.

Fix
a. Init a new instance of itemObj in postAddItem to clear the inputs
b. Fix edited item alert message from add to edit
-----------------------------------------------------------------------------------------------------
20.04.21
1. Try to create table with foreign key constraints
-----------------------------------------------------------------------------------------------------
21.04.21
1. Create forms and validators for items, not complete model yet
-----------------------------------------------------------------------------------------------------
22.04.21
1. Create and fix sql for tblitems.
2. Added more fields in item.model.ts 

## TODO ##
VendorId will be updated to many 2 many concept when table is created.
-----------------------------------------------------------------------------------------------------
24.04.21
1. Redesign the Add item form
2. Added Category.service.ts
3. Added GET for catRoutes in app.js
4. Added select for category in additem
5. Added select for vendor in additem 
6. Having issues arranging datepicker..... ###
    6.1 To change the date locale to SG format

## TODO ##
Vendor select will be updated to when table is created.

-----------------------------------------------------------------------------------------------------
25.04.21
1. Remove Updated row from Add New Item page.
2. Added Category to be displayed with the first record from DB, using ngFor index
3. Added load today's date to Created on datepicker
4. Added Item SN form control to validation group
5. Added catId, vendorId(temp hardcoded value), createdby, createOn field to itempost to prepare posting

## TODO ##
Update itemroutes.js SQL statement for insert



-----------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------
###################################################################################################
Planned changes
1. Delete will not delete from DB, a flag will be used to indicate it is deleted.
    - Only delete the item from DB after a set amount of time.

2. To change the panel color when the item is due for maintenance or out of warranty with X mths.



