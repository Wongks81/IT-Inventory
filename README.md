# ITinventory
Before 17/04/21
1. Get rows from postgres done
2. Lazy-Loading for item done

17/04/21
1. To post to postgres db - done
2. Add documention in sql for resetting identity number.
3. Validation only done for required on itemName

18/04/21
New
1. To edit item entries
    1.1 to add edit button to panel - added to item details instead.

Fix
a. Added a "Back" button to add item to route back to list page
    a1. Set the buttons in item.css to 100px width
    a2. Changed the additem form from ngModel to ngSubmit with the form control to get the values.
        - ngModel with FormControl will be deprecated soon.