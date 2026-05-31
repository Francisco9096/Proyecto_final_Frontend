from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Producto

@api_view(['GET', 'POST'])
def vender_producto(request, producto_id):
    try:
        producto = Producto.objects.get(id=producto_id)
        ingredientes = producto.ingredientes.all()

        for ing in ingredientes:
            if ing.inventario <= 0:
                return Response({"error": "Sin inventario"}, status=400)

        for ing in ingredientes:
            ing.inventario -= 1
            ing.save()

        return Response({
            
            "mensaje": "Venta realizada con éxito",
            "inventario": [
                {"nombre": ing.nombre, "stock": ing.inventario}
                for ing in ingredientes
            ]
        })

    except Producto.DoesNotExist:
        return Response({"error": "Producto no existe"}, status=404)
    

@api_view(['GET'])
def listar_productos(request):
    productos = Producto.objects.all()

    data = [
        {
            "id": p.id,
            "nombre": p.nombre,
            "precio": p.precio_publico,
            "stock": p.stock
        }
        for p in productos
    ]

    return Response(data)
