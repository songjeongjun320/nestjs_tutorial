export default function DashboardDetailPage({params, searchParams}){
    console.log(params);
    return <main>Dashboard Detail {params.id} code={searchParams.code}</main>
}