from django.db import models

class Ingrediente(models.Model):
    nombre = models.CharField(max_length=100)
    precio = models.FloatField()
    calorias = models.IntegerField()
    inventario = models.IntegerField()
    tipo = models.CharField(max_length=20)  # base o complemento

    def __str__(self):
        return self.nombre


class Producto(models.Model):
    nombre = models.CharField(max_length=100)
    precio_publico = models.FloatField()
    ingredientes = models.ManyToManyField(Ingrediente)
    stock = models.IntegerField()

    def __str__(self):
        return self.nombre
