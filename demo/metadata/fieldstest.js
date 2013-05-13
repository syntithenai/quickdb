$.fn.quickDB.defaultOptions.tables = {
	testtable:{
		fields: {
			name: {type:'text',label:'Category',dvalidation:{required:true,match:[{rule:"no",message:"You must type no somewhere"},{rule:"way",message:"You must type way somewhere"}]}},
			image: {type:'image',label:'image'},
			file: {type:'file',label:'file'},
			color: {type:'color',label:'color',validathion:{required:true},depends:{'field':'name'}},
			date: {type:'date',label:'date'},
			datetime: {type:'datetime',label:'datetime'},
			email: {type:'email',label:'email'},
			month: {type:'month',label:'month'},
			number: {type:'number',label:'number'},
			range: {type:'range',label:'range'},
			search: {type:'search',label:'search'},
			tel: {type:'tel',label:'tel'},
			time: {type:'time',label:'time'},
			url: {type:'url',label:'url'},
			week: {type:'week',label:'week'},
			password: {type:'password',label:'password',dvalidation:{required:true,password:true}},
			rte: {type:'rte',label:'rte'},
			textarea: {type:'textarea',label:'textarea',dvalidation:{required:true}},
			svg:{type:'svg',label:'svg'},
			sheet:{type:'sheet',label:'sheet'},
			selecttype: {type:'select',label:'Select',values:{1:'this is the stuff',2:'that was the stuff',3:'what stuff'},validation:{required:true}},
			radio: {type:'radio',label:'Radio',values:{'choose A':'choose A',2:'chooseB','aaaa':'chooseC'}},
			checkbox: {type:'checkbox',label:'checkbox',values:{1:'Apples',2:'Oranges',3:'Pineapple'},dvalidation:{required:true}},
			bool: {type:'boolean',label:'Boolean'}
			
		},
		views: {
			label: { fields:'categories.name as label' },
			ddefault: { fields:'name,file,image' },
			ddefault: { fields:'categories.name as name,selecttype,radio,checkbox,bool' },
			default: { fields:'categories.name as name,color,date,datetime,email,month,range,search,tel,time,url,week,file,image,password,textarea,rte,selecttype,radio,checkbox,bool' }
		}
	}