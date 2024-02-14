export interface FilterProps{
  id:string;
  custom_id?:string;
  custom_item_id?:number;
  name?:string;
  text_content?:string;
  description?:string;
  status?:{id?:string;status?:string;color?:string;orderindex?:number;type?:string};
  orderindex?:string;
  date_created?:string;
  date_updated?:string;
  date_closed?:string;
  date_done?:string;
  archived?:boolean;
  creator?:{id?:number;username?:string;color?:string;email?:string;profilePicture?:string};
  assignees?:[];
  watchers?:[{id?:number;username?:string;color?:string;initials?:string;email?:string;profilePicture?:string}];
  checklists?:[];
  tags?:[];
  parent?:string;
  priority?:string;
  due_date?:string;
  start_date?:string;
  points?:string;
  time_estimate?:string;
  time_spent?:number;
  custom_fields?:[
    {id?:string;name?:string;type?:string;type_config?:
      {default?:number;placeholder?:string;new_drop_down?:boolean;options?:[{id?:string;name?:string;color?:string;orderindex?:number}]};
  date_created?:string;
  hide_from_guests?:boolean;
  value?:string;
  required?:boolean}];
  dependencies?:[string];
  linked_tasks?:[string];
  locations?:[{
            id: string,
            name: string
        }];
  team_id?:string;
  url?:string;
  sharing?:{public?:boolean;public_share_expires_on?:string;public_fields?:[string];token?:string;seo_optimized?:boolean};permission_level?:string;list?:{id?:string;name?:string;access?:boolean};project?:{id?:string;name?:string;hidden?:boolean;access?:boolean};
  folder?:{id?:string;name?:boolean;hidden?:boolean;access?:boolean};
  space?:{id?:string};
  attachments?:[{
            id: string,
            date: string,
            title: string,
            type: number,
            source: number,
            version: number,
            extension: string,
            thumbnail_small: string,
            thumbnail_medium: string,
            thumbnail_large: string,
            is_folder: string,
            mimetype: string,
            hidden: boolean,
            parent_id: string,
            size: number,
            total_comments: number,
            resolved_comments: number,
            user: {
                id: number,
                username: string,
                email: string,
                initials: string,
                color: string,
                profilePicture: string
            },
            deleted: boolean,
            orientation: string,
            url: string,
            email_data: string,
            url_w_query: string,
            url_w_host: string
        }]
}

export interface HomeProps{
  searchParams: FilterProps
}