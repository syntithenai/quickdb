FINT TODO
recent features have included optimisations to the query generation and list binding to dramatically increase list rendering speed
list rendering continues to be a problem however when confronted with even hundreds of records.
further TODO here is to 
- 
- optimise template generation - minimise objects/caching ...
- apply to all functions derived from independant database query 


CURRENT BUGS
- no quickdb extra configuration on reinitialise (activate) - need to share extra configuration between initFunctions. and activateFunctions.
- import tidy up -- one click  -- select options
 

so can i really type now

TODO
- reports

MERGE IMPORT/RECORD MANAGEMENT
- clear database or clear per table
- tidy up import process
	- change data type picklist based on data
	- show tickboxes for import data tables
	- usefully visible rejected rows
	- if transactions and transactions rows don't have account set, show account picklist
- tidy up categorise process
	- balance check (when search criteria allow for it)
	- messages after import to indicate change in search criteria (TODO) and auto search
	

WIZARD FEEDBACK
- what mechanism for posting
- overlay by rule wizard ?? - push pop on createwizard
- storage of progress
- autodetermine progress
	- newby - show home text
	- following sample data ?
		- have import data ?
			- have categorised ?
				- viewed reports ?

	- have accounts ?
		- have transactions ?
			- pending transactions ?

CONCEPTS FOR UI
- top menu/tabs (FIXED)
- messages bar
- widget boxes
- main list
- google ads (top menu/bottom list)


QUICKDB

HOWTO
quickstart
	- HTML,JS init
templates
field types
	relationships
		joins
		views
		* delete mm table auto
		
search config

init
	mvc
	create model
		getSchema - 
			ensure metadata of tables and fields for joins
				interpret mm model, add fks, aliases
			ensure views metadata for each table
			create tables
				mm
			create views

APPLICATION HOWTO
model
	relationships, joins, views
		transactions has many join options
			tags vs rule based tag suggestions
* ongoing problem with recombination of tables in join contions. where more than one table  in join condition how to bind tables with what conditions
tags:{
	label:'Tags',
	table:'tags',
	mmTable:'mm_transactionstags',
	condition:'transactions.rowid=mm_transactionstags.transactions and tags.rowid=mm_transactionstags.tags',
}			
=======================
ruletags:{
				label:'Auto Tags',
				table:'tags',
				alias:'ruletags',
				mmTable:'',
				condition:"transactions.description like rules.filtertext and (rules.startdate is null or trim(rules.startdate)='' or transactions.date >=rules.startdate) and (rules.enddate is null or trim(rules.enddate)='' or rules.enddate> transactions.date) and ruletags.rowid=rules.tags",
				conditionFields:'transactions.description,rules.filtertext,rules.startdate,transactions.date,rules.enddate,ruletags.rowid,rules.tags'
			}



tabs UI
finance.ui init (activatable)
init and activate functions
	plugin scope
	cross plugin references DOM
html index.<>.html and js finance.<>.js tab based grouping of functions
also finance.lib.js
home
	init on transaction managers and accounts,tags managers
	transaction manager 
		- activate buttons - approve, tags, newrule wizard ..
		- munge rows (tags,status,balance)
	
share
	import export buttons
manage
	init on tags, rules managers
reports
	TODO
help





TODO
pre festival have working list and almost working form rendering with templates
need to 
- fix BUGS with form file type and join type 
- test all join types and field types
- test templating ideas in practice

THEN
documentation
	quickdb ideas
	quickdb howtos - new model, templates, extra bindings, method overrides, ...
	HOWTO
	security statement vs javascript and google design guidelines
		avenues of attack
		how can script be inserted into fint
			- templates
			- api, setup config
			- database values?? -
				when importing a transactions file from an unknown source 
				- use a seperate database for each import file (no good if get script access)
				- sanitise incoming values
			- script exec from content ??
			ads
			remote data sources
				including fint.com.au 
			remote images ??
			chrome extension 
				- breaks down barriers  immediate script injection, dom manipulation for any matched site
				- can do dom manipulation although scripts live in another context (can this by bypassed through data in the DOM to share variables??)
			buffer overflows in the browser/database implementation ??	
			browser bufferoverflows
			..
		
		
	
	MENU
		overview/demos/faq/forum/tech overview/field types/api docs-classes/methods/about-sponsor
		
	

features
database import/export
online save
online load
auto validation rules by type - date/password/integer/decimal/currency/


BUTTONS
- save, save local, cancel, download , print, csv, pdf


	
WORKING TOWARDS 
	quickdb.fint.com.au	
	and
	(password protected) fint.com.au
		what is fint? key features
		how to i use it?
		features ?
		privacy ?
		underlying tools
		contributing
		android/iOS apps

!Development notes
Assumptions in the of view class about the structure of the HTML in other user interface
	When a form loads the first input element is focused

	The edit form has class managerform


!Description
QuickDB is a jquery plugin that creates a CRUD (Create Write Update Delete) user interface from JSON database meta data.
The user interface works without a network connection and uses HTML5 features including WebSQL for local storage.
The local database can be synchronised to the network.


Finally joins may be rendered as field types as well as used in generating views and list queries.

! Features
- appcache compliant
- full relationship editing
- many field types
-


!!Challenges
- Unique IDS across local instances. What about precaching IDS?
- What about issueing update statement to local database for record received from server and not yet saved locally?


!Table Relationships for web storage
Aim: To come up with a configuration structure and outline of code requirements to generate CRUD interface. More specifically the elements of the interface that reflect any possible relationships.
!! Schema Definition

!!! JSON style configuration (I prefer this for compactness and minimum redundancy and ease of use)
Could look into building JSON config from DOM or XML












