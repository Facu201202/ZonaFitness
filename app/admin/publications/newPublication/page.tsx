import NewPublicationForm from "@/components/admin/publications/NewPublicationForm";

export default function () {

    return (
        <div className='w-full bg-gray-200'>
            <div className="p-6 border-b border-gray-300 bg-white">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">Nueva Publicación</h2>
                    <p className="text-gray-800">Complete el formulario para crear una nueva publicacioón</p>
                </div>
            </div>
            <NewPublicationForm/>
        </div>
    )
}
