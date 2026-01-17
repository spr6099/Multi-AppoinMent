----------------------------------------
    how to run the project
----------------------------------------
npm install
npm run dev


---------------------------------------------
        Working flow Flow
--------------------------------------------

1) User visits website
    → Can view services & provider availability
    → Cannot book without login

2) User registers / logs in
3) After login:
4) Select service

    Select date
    View only available future time slots
    Book appointment

5) After booking:

    Slot disappears from availability
    Appointment appears in My Appointments

5) User can:

    View upcoming appointments
    View past appointments
    Cancel an appointment before appointment time
    Logout


------------------------------------------------------
 Logics
------------------------------------------------------
1) find available slots
------------------------ 

*) The function loops through the next 7 days, starting from the current date.
*) Each day’s available time range is from 10:00 AM to 9:00 PM.
    For the current day, past time slots are skipped to prevent booking in the past.

*) Time slots are created at 30-minute intervals within the working hours.

*) Each slot is checked against docInfo.slots_booked.
    If the slot is already booked, it is excluded.

*) Only future, unbooked slots are added to the final slots list.

2) Book appoinment logic
-------------------------
*) If the user is not logged in (no token), redirect to login and stop execution.

*) Extract the selected date from the chosen slot.
    Convert it into a day_month_year format to match backend booking records.

*) Call the backend API with:

        Service ID
        Slot date
        Slot time

    Attach JWT token in the Authorization header.

*) Handle response
    On success:
        Show success message
        Refresh service data (to hide booked slot)
        Redirect user to My Appointments
On failure:
    Show error message