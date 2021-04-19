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
2. Tried to split the routes to another file, FAILED!!!

Fix
a. Init a new instance of itemObj in postAddItem to clear the inputs
b. Fix edited item alert message from add to edit
-----------------------------------------------------------------------------------------------------
###################################################################################################
Planned changes
1. Delete will not delete from DB, a flag will be used to indicate it is deleted.
    - Only delete the item from DB after a set amount of time.

2. To change the panel color when the item is due for maintenance or out of warranty with X mths.

3. Tried to extract routes from server.js to a new file, failed to link for post, put delete.
   No issue with get.
   To troubleshoot more when have time.
