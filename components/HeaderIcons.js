

export default function HeaderIcons({ title, Icon}) {
  return (
    <div className="flex flex-col items-center  group ">
    <Icon className="h-6  group-hover:animate-bounce "  />
    <p className=" opacity-0 group-hover:opacity-100 font-body font-thin text-xs">{title}</p>
    
    </div>
  )
}
