# Project

Project Workflow of Classified Website to post Advertisements :

Home Page : Welcome Page of Classified Website as well as asks for from which Login Portal you want to enter into Website.

Account Login Portals : [ 3 Sub - servers ]

1.Admin Login
2.Member Login
3.Guest Login (without credentials)

Admin Login : 

1.Admin Login Page 

(No Register portal only admin can access this login whose details are already in MongoDB Database. Therefore we have to create a proper Admin database in MongoDB to use admin credentials for login.)

2.View All ads based on date descending order 

(View page of all the ads of different members in order of new to old ads posted on the Website. Here view is represented in table format and one column will be comprised of Link/Button to the “Request More Detail Form” where you can ask member for mandatory details to be filled in your advertisement. This form data will be send out to that particular member.)

3.Request More Detail Form

(Here more details needed for the particular advertisement will be sent via Email to the member requesting more details on the advertisement.)

4.View all members - but not edit

(In this view page member’s profile mandatory data field are represented via table which is saved on MongoDB.)

5.View full member data

(The View all member page will have last column in the table which have link for that particular member full data page. In this full member data page all the fields filled by the member will be represented.)



Member Login :

1.Login & Logout - with their email ID and Password 

(Credentials should match with that of present in MongoDB Member database. For new member switch to the new registration page where you can provide your email and password. If you forget password click on Forgot Password Page to get password on your registered email ID.)

2.Self Registration - With their email ID

(Registration Portal to add yourself on the website to post ads. Here only email and password is needed to generate your account. Which will be saved on database then thereafter you can Login via Member Login Page.)

3.Forgot Password - Mail back the password

(This is page just help the existing customers to get their password which they may have forgot by chance. This page will require to enter your email which is registered on website to send password back. This is done with the help of Sendgrid.)

4.Create New AD [member id]
I.Name
II.Description
III.Price
IV.Image

(On Successful Login you create a new ad to post on site with filling above mentioned details via insert query in the MongoDB.)

5.View My Ads

(This View My Ads Page will show member ads posted by him/her on the website in the table format via Select query.)

6.Delete My Ad - one by one

(In the view my Ads Page one action column will be there for deleting that particular ad.)

7.Update My Ad - [Update Image, Update Content]

(In the view my Ads Page one action column will be there for updating that particular ad. This will redirect to the update via using that particular ad _id and then respectively modification will be submitted using update query for that ad.)

8.Self Destruct My Ads - must be all the ads of his/her

(This link will be used to drop of the entire ads posted by member table in the database of that particular member)


9.Self Destruct My Account

(This link will delete the user email and password details from member login page as well as drop of the ads posted by that member on website by droping that member ads table from database.)

10.Update their profile

(This will open Profile page of member where he can add his/her details by insert query.)

11.Update their password

( here member can update the login password if they needed by update query for member login credentials.)

Guest Login (without credentials) :

1.View all your ads in date based descending order

(Here all posted ads will be presented to the guest user in order of new to old.)

2.once they view one ad - show full details based on the ad id

(Add name will contain the link to go on view full details page of that particular ad)

3.have a contact form - email to the member of the ad, admin mail must be in cc

(In that view full detail page of that particular ad, there will be a contact form to fill details to reach out that member who posted that ad using Sendgrid mail along with putting admin in cc in the mail. )

Technologies required :

1.NodeJS
2.Github to push code in development branch
3.Sendgrid Email API functionality
VS Code to implement code
